---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality"
domain: "Requirements Model"
element_id: 1821074
diagrams: 4
connections: 8
tags:
  - requirement
  - requirements-model
---

# 📋 Save application DDM data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality

## 📝 Notes

This object describes the steps, how system saves the data of the direct debit mandate from the application.

Input:
- ApplicationCode = unique identifier of the application
- DirectDebitMandateData = relevant data of the direct debit mandate to be saved

Output:
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the ApplicationCode from the input and checks, whether there is any direct debit mandate already associated with the corresponding application (i.e. (Contract->)Temporary_Application->Application_to_DDM.DDM_ID identified by ApplicationCode exists).
	
- System takes the DirectDebitMandateData from the input and proceeds based on the result of the previous step as follows:

a) If the direct debit mandate does not exist yet, system creates a new one by performing the following sub-steps:
      2.1.  System creates the required DDM documents according to the rule Create documents for new application DDM automatically with ApplicationCode on the input.
      2.2.  System creates a new direct debit mandate according to the rule Create application DDM with ApplicationCode, DirectDebitMandateData and DocumentUUID returned within the previous sub-step as DirectDebitMandateData[DocumentUUID] on the input.

b) If the direct debit mandate already exists, system updates it according to the rule Update application DDM with respective DirectDebitMandateCode (found within the previous step) and DirectDebitMandateData on the input.

In case of failure (i.e. when ErrorCode is returned on any of the rule's output), system returns the respective ErrorCode to the calling object.
	
- Algorithm ends.

## 🔗 Connections (8)

- → Dependency: [[Create application DDM]]
- → Dependency: [[Create documents for new application DDM automatically]]
- → Dependency: [[Update application DDM]]
- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]
- ← Dependency: [[{MOD}01.314 Create application externally]]
- ← Dependency: [[{MOD}01.098 Update and evaluate application v9]]
- ← Dependency: [[{MOD}01.310 Update application v9]]
- ← Dependency: [[01.095 Create and evaluate application]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
- Custom: LOR-9160 - Save direct debit mandate data from application form via DDM REST API
- Custom: LOR-9397 - Automatically create DDM documents with DDC check moment upon submitting application form
- Custom: Operations with application DDM
