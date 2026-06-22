---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules"
domain: "Analysis Model"
element_id: 1706415
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Service with qualification criteria allowed

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules

## 📝 Notes

// Returns True if the service 
Input:
- OFP.OFP qualification criteria
- Service.QualificationCriteria (code,value)

If does not exist record in Offer Qualification Criteria Contract.OfferFinancialParameters.OfferQualificationCriteria then return False for all services with qualification criteria

If all defined qualification criteria (code,value) for service don't exist in the Contract.OfferFinancialParameters.OfferQualificationCriteria then return FALSE.
Else return TRUE.

## 🔗 Connections (1)

- ← Dependency: [[Prepare Services for Selection]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
