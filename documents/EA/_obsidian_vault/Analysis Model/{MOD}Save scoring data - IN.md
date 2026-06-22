---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application Evaluation/Business Rules"
domain: "Analysis Model"
element_id: 1818741
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Save scoring data - IN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application Evaluation/Business Rules

## 📝 Notes

System saves values of following fullpaths, if these exists as extended properties to contract (Contract->Extented_Property_Value with Extended_Property_Item according to selected fullpath):
- outputData.remoteSigningEligibility.additionalDocument -> Additional document (code ADDITIONAL_DOCUMENT)
- outputData.remoteSigningEligibility.financialStatements -> Cancelled cheque/Bank statement/Bank Passbook Required (code CANCELLED_CHEQUE)
- outputData.remoteSigningEligibility.addressProof -> Address proof Required (code ADDRESS_PROOF_REQUIRED)
- outputData.remoteSigningEligibility.idProof -> ID proof Required (code ID_PROOF_REQUIRED)
- outputData.remoteSigningEligibility.eligible -> Remote Signing Eligibility (code REMOTE_SIGNING)

## 🔗 Connections (1)

- → Generalization: [[Save scoring data]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
