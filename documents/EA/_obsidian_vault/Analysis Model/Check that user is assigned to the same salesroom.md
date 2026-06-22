---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/COMMON/Business rules"
domain: "Analysis Model"
element_id: 1723281
diagrams: 6
connections: 20
tags:
  - requirement
  - analysis-model
---

# 📋 Check that user is assigned to the same salesroom

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/COMMON/Business rules

## 📝 Notes

This rule describes, how system compares that the user from input is assigned to the same salesroom from input
Input:
- salesroomCode
- userCode - user identified against WS

Output:
- TRUE/FALSE
the system calls HOMESIS REST API GET https://{environment}/homesis/restful/users/{userCode}/salesrooms/{salesroomCode}/exists

The recieved result is used on output.

## 🔗 Connections (20)

- ← Dependency: [[{DEL}Update document instance]]
- ← Dependency: [[{MOD}01.465 Set payment channel]]
- ← Dependency: [[01.463 Change repayment channel externally (UseCase 1817775)]]
- ← Dependency: [[01.461 Update DDM externally (UseCase 1817774)]]
- ← Dependency: [[{MOD}01.460 Create DDM externally]]
- ← Dependency: [[{DEL}01.176 Create document]]
- ← Dependency: [[{DEL}01.169 Get document content]]
- ← Dependency: [[{DEL}01.174 Update document]]
- ← Dependency: [[{DEL}01.166 Get application offers (UseCase 1827729)]]
- ← Dependency: [[{MOD}01.170 Update offer externally]]
- ← Dependency: [[01.168 Refuse offers externally]]
- ← Dependency: [[01.167 Accept offer externally (UseCase 1827726)]]
- ← Dependency: [[{MOD}01.099 Sign contract externally]]
- ← Dependency: [[{MOD}01.098 Update and evaluate application v9]]
- ← Dependency: [[01.312 Update approved application (UseCase 1879295)]]
- ← Dependency: [[01.311 Update offer to application and evaluate (UseCase 1879293)]]
- ← Dependency: [[01.313 Evaluate application (UseCase 1879292)]]
- ← Dependency: [[{MOD}01.310 Update application v9]]
- ← Dependency: [[01.040 Get application data (UseCase 1879289)]]
- ← Dependency: [[01.164 Search for application (UseCase 1879288)]]

## 📊 Appears In (6 diagrams)

- Custom: Business rules
- Custom: Business Rules
- Use Case: Use Case
- Use Case: Use Case
- Use Case: Use Case
- Use Case: Use Case
