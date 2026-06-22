---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/COMMON/Business rules"
domain: "Analysis Model"
element_id: 1723282
diagrams: 1
connections: 9
tags:
  - requirement
  - analysis-model
---

# 📋 Select user based on SSO token

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/COMMON/Business rules

## 📝 Notes

External system can send SSO token in header of the SOAP request for endpoint specified in global parameter enableTokenImpersonationForWsEndpoints. This token is then validated using API isTokenValid:
- if token is valid, then system gets user using API attributes
- if token is invalid, then system uses technical user of the API call
The selected user is then considered as an originator who triggered the call and is used in related use case accordingly.

If no SSO token is send in the API request, calling system (user identified against WS) is automatically considered as an originator of the API call.

## 🔗 Connections (9)

- ← Dependency: [[01.168 Refuse offers externally]]
- ← Dependency: [[01.167 Accept offer externally (UseCase 1827726)]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- ← Dependency: [[{MOD}01.187 Sign contract]]
- ← Dependency: [[{MOD}01.098 Update and evaluate application v9]]
- ← Dependency: [[01.311 Update offer to application and evaluate (UseCase 1879293)]]
- ← Dependency: [[01.313 Evaluate application (UseCase 1879292)]]
- ← Dependency: [[{MOD}01.310 Update application v9]]
- ← Dependency: [[01.095 Create and evaluate application]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules
