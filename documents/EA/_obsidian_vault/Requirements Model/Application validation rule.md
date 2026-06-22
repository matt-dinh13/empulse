---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality"
domain: "Requirements Model"
element_id: 1773409
diagrams: 2
connections: 9
tags:
  - requirement
  - requirements-model
---

# 📋 Application validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality

## 📝 Notes

input

	
- application
	
- AF configuration-optional
	
- complex check - default true


System validates input application according to General validation of attributes rule,  Application data validation rule and if complex check=true,Configurable application validation rule according to AF configuration(if on input). If any validation is defined in all the rules, configurable validation is used preferably, general rules are at the end. If validation of any field fails, response code is set to INVALID_APPLICATION_DATA and each validation has its own validationError constructed according to Create validation error message. All validations are always performed even if any of them fails.

Note:
If any validation to be performed needs any information about offer and application has no offer, the validation is considered as passed.

output

	
- response code
	
- list of validationError-optional

## 🔗 Connections (9)

- → Dependency: [[Create validation error message]]
- → Dependency: [[Application validation rule (Requirement 1773433)]]
- → Dependency: [[Configurable application validation rule]]
- → Dependency: [[General validation of attributes rule]]
- ← Dependency: [[{MOD}01.098 Update and evaluate application v9]]
- ← Dependency: [[01.312 Update approved application (UseCase 1879295)]]
- ← Dependency: [[01.313 Evaluate application (UseCase 1879292)]]
- ← Dependency: [[{MOD}01.310 Update application v9]]
- ← Dependency: [[01.095 Create and evaluate application]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
- Custom: Validation Rules
