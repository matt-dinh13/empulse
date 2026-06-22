---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions"
domain: "Analysis Model"
element_id: 1589890
diagrams: 6
connections: 18
tags:
  - requirement
  - analysis-model
---

# 📋 Authentication questions

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions

## 📝 Notes

Authentication questions for client authentication.

Selection algorithm
1. System selects Authentication questions based on Account Type
2. System evaluates answers to each question (i.e. takes a value/values from source defined in Authentication Question Type.Answer Source) accordingly:
- if Account Type = REVOLVING_ACCOUNT|| 'FLEXI_LIMIT_ACCOUNT' then system checks answer is
   not empty, if answer is empty then system skips the question and continues with
   another one (to return only questions with not empty answers)
- else (Account Type = CURRENT_ACCOUNT) System filters out questions with
   empty answer and stores them in filteredOutQuestions
5. System shuffles order of questions
6. System adds questions from filteredOutQuestions with answer GEN_NotAvailable
7. System returns list of question / answer pairs

## 🔗 Connections (16)

- → Dependency: [[Authentication Question]]
- ← Generalization: [[Work phone number]]
- ← Generalization: [[Contact address (Requirement 1589689)]]
- ← Generalization: [[Possession of the card]]
- ← Generalization: [[Customer's email address]]
- ← Generalization: [[Date of card contract signing]]
- ← Generalization: [[Company name during application origination]]
- ← Generalization: [[Mobile phone number (Requirement 1589684)]]
- ← Generalization: [[Company name, job and address]]
- ← Generalization: [[Last 4 digits of credit card]]
- ← Generalization: [[Home phone number]]
- ← Generalization: [[Name of goods purchased]]
- ← Generalization: [[Permanent address (Requirement 1589679)]]
- ← Generalization: [[Place where the contract was signed]]
- ← Generalization: [[Credit card limit]]
- ← Dependency: [[12.533 Client authentication (UseCase 1849955)]]

## 📊 Appears In (6 diagrams)

- Custom: Authentication questions
- Custom: Business rules
- Custom: Client authentication
- Logical: Authentication questions
- Use Case: Card activation
- Use Case: PIN request
