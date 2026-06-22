---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONSENT_DATA"
domain: "Analysis Model"
element_id: 1878241
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 VerificationType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONSENT_DATA

## 📝 Notes

Information about how the document is verified.

## 🔗 Connections (3)

- ← Dependency «use»: [[ConsentDocumentType]]
- ← Dependency: [[{MOD}DocumentData (Class 1821417)]]
- ← Dependency «use»: [[DocumentSignatureType]]

## 📊 Appears In (3 diagrams)

- Logical: HO_CONSENT_DATA
- Logical: HO_CONTRACT_DATA - contract data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| contactNumber | string |  |
| codeSent | dateTime |  |
| lastVerificationAttempt | dateTime |  |
