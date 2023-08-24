package com.doyatama.university.service;

import com.doyatama.university.exception.BadRequestException;
import com.doyatama.university.exception.ResourceNotFoundException;
import com.doyatama.university.model.Chapter;
import com.doyatama.university.model.Question;
import com.doyatama.university.model.Subject;
import com.doyatama.university.payload.PagedResponse;
import com.doyatama.university.payload.question.QuestionRequest;
import com.doyatama.university.payload.question.QuestionResponse;
import com.doyatama.university.repository.QuestionRepository;
import com.doyatama.university.security.UserPrincipal;
import com.doyatama.university.util.AppConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author Doyatama
 */
@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    private static final Logger logger = LoggerFactory.getLogger(QuestionService.class);

    public PagedResponse<QuestionResponse> getAllQuestions(int page, int size) {
        validatePageNumberAndSize(page, size);

        // Retrieve Polls
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");
        Page<Question> questions = questionRepository.findAll(pageable);

        if(questions.getNumberOfElements() == 0) {
            return new PagedResponse<>(Collections.emptyList(), questions.getNumber(),
                    questions.getSize(), questions.getTotalElements(), questions.getTotalPages(), questions.isLast(), 200);
        }

        // Map Polls to PollResponses containing vote counts and poll creator details
        List<QuestionResponse> questionResponses = questions.map(asResponse -> {
            QuestionResponse questionResponse = new QuestionResponse();
            questionResponse.setId(asResponse.getId());
            questionResponse.setChapter_id(asResponse.getChapter().getId());
            questionResponse.setName(asResponse.getName());
            questionResponse.setDescription(asResponse.getDescription());
            questionResponse.setAnswerType(asResponse.getAnswerType());
            questionResponse.setQuestionType(asResponse.getQuestionType());
            questionResponse.setCreatedAt(asResponse.getCreatedAt());
            questionResponse.setUpdatedAt(asResponse.getUpdatedAt());
            return questionResponse;
        }).getContent();

        return new PagedResponse<>(questionResponses, questions.getNumber(),
                questions.getSize(), questions.getTotalElements(), questions.getTotalPages(), questions.isLast(), 200);
    }

    public Question createQuestion(UserPrincipal currentUser, QuestionRequest questionRequest) {
        Question question = new Question();
        question.setChapter(new Chapter(questionRequest.getChapter_id()));
        question.setName(questionRequest.getName());
        question.setDescription(questionRequest.getDescription());
        question.setAnswerType(questionRequest.getAnswerType());
        question.setQuestionType(questionRequest.getQuestionType());
        question.setCreatedBy(currentUser.getId());
        question.setUpdatedBy(currentUser.getId());
        return questionRepository.save(question);
    }

    public QuestionResponse getQuestionById(Long questionId) {
        Question question = questionRepository.findById(questionId).orElseThrow(
                () -> new ResourceNotFoundException("Question", "id", questionId));

        QuestionResponse questionResponse = new QuestionResponse();
        questionResponse.setId(question.getId());
        questionResponse.setChapter_id(question.getChapter().getId());
        questionResponse.setName(question.getName());
        questionResponse.setDescription(question.getDescription());
        questionResponse.setAnswerType(question.getAnswerType());
        questionResponse.setQuestionType(question.getQuestionType());
        questionResponse.setCreatedAt(question.getCreatedAt());
        questionResponse.setUpdatedAt(question.getUpdatedAt());
        return questionResponse;
    }

    private void validatePageNumberAndSize(int page, int size) {
        if(page < 0) {
            throw new BadRequestException("Page number cannot be less than zero.");
        }

        if(size > AppConstants.MAX_PAGE_SIZE) {
            throw new BadRequestException("Page size must not be greater than " + AppConstants.MAX_PAGE_SIZE);
        }
    }

    public Question updateQuestion(QuestionRequest questionReq, Long id, UserPrincipal currentUser){
        return questionRepository.findById(id).map(question -> {
            question.setChapter(new Chapter(question.getChapter().getId()));
            question.setName(question.getName());
            question.setDescription(question.getDescription());
            question.setAnswerType(question.getAnswerType());
            question.setQuestionType(question.getQuestionType());
            question.setCreatedBy(currentUser.getId());
            question.setUpdatedBy(currentUser.getId());
            return questionRepository.save(question);
        }).orElseThrow(() -> new ResourceNotFoundException("Question" , "id" , id));
    }

    public void deleteQuestionById(Long id){
        Optional<Question> question = questionRepository.findById(id);
        if(question.isPresent()){
            questionRepository.deleteById(id);
        }else{
            throw new ResourceNotFoundException("Question", "id", id);
        }
    }
}