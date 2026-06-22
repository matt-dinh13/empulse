---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Business rules"
domain: "Analysis Model"
element_id: 1772620
diagrams: 7
connections: 19
tags:
  - requirement
  - analysis-model
---

# 📋 Create validation error message

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Business rules

## 📝 Notes

System creates object with error data.
1. messageCode : MSG code which is connected with failed validation
2. errorSource: the path of validated attribute in the request(e.g. Application.Contact.Value)
3. messageAttributes - one object for each validated attribute (more then one object only in case of cross validation)
   a. key - name of the variable used in the messageCode
   b. value - value of the variable used in the messageCode

## 🔗 Connections (19)

- ← Dependency: [[Search application validation rule]]
- ← Dependency: [[Application validation rule]]
- ← Dependency: [[{DEL}Update document instance]]
- ← Dependency: [[{MOD}01.462 Get DDM by application]]
- ← Dependency: [[{MOD}01.465 Set payment channel]]
- ← Dependency: [[01.463 Change repayment channel externally (UseCase 1817775)]]
- ← Dependency: [[01.461 Update DDM externally (UseCase 1817774)]]
- ← Dependency: [[{MOD}01.460 Create DDM externally]]
- ← Dependency: [[01.464 Get payment channels]]
- ← Dependency: [[{DEL}01.176 Create document]]
- ← Dependency: [[01.335 Get agreement documentation externally (UseCase 1819522)]]
- ← Dependency: [[{MOD}01.170 Update offer externally]]
- ← Dependency: [[{MOD}01.314 Create application externally]]
- ← Dependency: [[{MOD}01.099 Sign contract externally]]
- ← Dependency: [[{MOD}01.098 Update and evaluate application v9]]
- ← Dependency: [[01.311 Update offer to application and evaluate (UseCase 1879293)]]
- ← Dependency: [[01.313 Evaluate application (UseCase 1879292)]]
- ← Dependency: [[{MOD}01.310 Update application v9]]
- ← Dependency: [[01.095 Create and evaluate application]]

## 📊 Appears In (7 diagrams)

- Custom: Business rules
- Custom: Business Rules
- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
- Custom: LOR-9174 Implement getAgreement method
- Custom: LOR-9344 - Get direct debit mandate data for ApplicationPaymentChannelManagementWS via PAYM API
- Custom: Validation Rules
- Use Case: Use Case
