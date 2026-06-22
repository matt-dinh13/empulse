---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Mapping rules"
domain: "Analysis Model"
element_id: 1032986
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Mapping InitiateAccountTerminationtRequest - LoyaltyManagementWS


> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Mapping rules

## 📝 Notes

This rule describes mapping data from contract and relates entities to InitiateAccountTerminationtRequest which used in LoyaltyManagementWS.

Input: 
- Contract
{ADD PBR-201}
- ReasonForTermination
{/ADD}

Mapping to InitiateAccountTerminationtRequest:
- externalAccountSource = ACM
- externalAccountNumber = Contract.Credit Account Number
{ADD PBR-201}
- reasonForTermination = ReasonForTermination
{/ADD}

## 🔗 Connections (3)

- ← Dependency: [[{MOD}InitiateAccountTerminationRequest]]
- ← Dependency: [[01.171 Create REL contract termination request (UseCase 1852809)]]
- ← Dependency: [[01.410 Pay-off contract manually (UseCase 1878655)]]

## 📊 Appears In (1 diagrams)

- Custom: LoyaltyManagementWS - mapping rules
