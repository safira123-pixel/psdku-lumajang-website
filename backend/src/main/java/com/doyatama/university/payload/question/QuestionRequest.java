package com.doyatama.university.payload.question;

import javax.validation.constraints.NotBlank;

public class QuestionRequest {
    @NotBlank
    private Long chapter_id;

    @NotBlank
    private String name;

    @NotBlank
    private String description;

    @NotBlank
    private Integer answerType;
    @NotBlank
    private Integer questionType;

    public Long getChapter_id() {
        return chapter_id;
    }

    public void setChapter_id(Long chapter_id) {
        this.chapter_id = chapter_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getAnswerType() {
        return answerType;
    }

    public void setAnswerType(Integer answerType) {
        this.answerType = answerType;
    }

    public Integer getQuestionType() {
        return questionType;
    }

    public void setQuestionType(Integer questionType) {
        this.questionType = questionType;
    }
}
