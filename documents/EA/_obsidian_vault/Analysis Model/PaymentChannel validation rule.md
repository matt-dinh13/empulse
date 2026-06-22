---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773397
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 PaymentChannel validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

- type - mandatory, Repayment Channel validation rule / Disbursement Channel validation rule
	
- accountNumber


	
- currency - must be value of Currency.Code; Mandatory for repayment and type=DD


	
- holderName
	
- accountType
	
- ddmLimitAmount- DDM Limit height for applications and approved contracts (VAL_0122_OFFER_DDM_LIMIT) - Mandatory for repayment and type=DD
	
- ddmValidTo
	
- ddmValidFrom
	
- ddmRegularPayment - mandatory if contract type = REL and repayment type = DD, must be value of Regular_Payment_Type.Code;
	
- ddmRegularPaymentAmount - mandatory if ddmRegularPayment = 'FIXED'
	
- bankBranch - must be value of Bank Branch.Synchronization Code
	
- salesroom-must be value of Salesroom.Code (in  HOMESIS), Payment provider validation
	
- truncatedPan - mandatory for disbursement type = CA
	
- externalCardId - mandatory for disbursement type = CA
	
- cardIssuerName - mandatory for disbursement type = CA

## 🔗 Connections (4)

- → Dependency: [[Repayment Channel validation rule]]
- ← Dependency: [[Application validation rule (Requirement 1773433)]]
- → Dependency: [[Payment provider validation]]
- → Dependency: [[Disbursement Channel validation rule]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
