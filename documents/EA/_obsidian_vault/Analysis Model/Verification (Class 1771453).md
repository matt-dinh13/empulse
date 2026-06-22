---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consent verification/Business Rules"
domain: "Analysis Model"
element_id: 1771453
diagrams: 4
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 Verification

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consent verification/Business Rules

## 📝 Notes

Verification of object performed by SMS sent on the mobile phone

## 🔗 Connections (7)

- ← Dependency: [[Create URL to OTP panel accessible by client's device]]
- ← Generalization: [[Agreement Verification]]
- ← Generalization: [[Document Verification]]
- ← Generalization: [[TempAppl Bank Account Verification]]
- ← Generalization: [[TempAppl Document Verification]]
- → Dependency: [[Verification result]]
- ← Generalization: [[TempAppl Contact Verification]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Logical: Logical Data Model - Contract Signing
- Logical: Temporary Application - Payment Information
- Logical: Temporary Application - Person and Employment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Result | Verification result |  |
| Valid to | DateTime |  |
| External ID | int |  |
| Remaining attempts | int |  |
| Contact Value | string |  |
| Last Verification attempt | DateTime |  |
| Externally Verified Code | string |  |
| UUID | string |  |
