---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Client identification/Access Rights"
domain: "Analysis Model"
element_id: 1813644
diagrams: 6
connections: 22
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}06.010 Identify Client

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client identification/Access Rights

## 📝 Notes

Purpose of this use case is to identify the client in CIF using client's data filled in an application form. Note that CIF can either response immediately or later (asynchronously).

The data sent into CIF from this use case will be marked by attribute verificationLevel with applicable value (Entered on POS). Verification level has to be set for every entity sent to CIF.

## 🔗 Connections (19)

- → Dependency: [[Decide about customer data verification level]]
- → Dependency: [[Set contract status to canceled]]
- → Realisation: [[HS Manual de-duplication support]]
- → Dependency: [[Get customer contracts]]
- → Dependency: [[Block Marketing Offer by Contract]]
- → Dependency «invokes»: [[01.161 Send to clients evaluation (UseCase 1819976)]]
- → Dependency: [[Parameters for document file upload]]
- → Realisation: [[06.010 Identify client]]
- → Dependency: [[Is Marketing Offer available on Salesroom]]
- → Dependency «invokes»: [[01.150 Send to application evaluation (UseCase 1819974)]]
- → Dependency: [[Set parameters for file upload]]
- → Dependency «invokes»: [[01.009 Upload file to document archive (UseCase 1851469)]]
- → Dependency «invokes»: [[01.151 Send to preliminary evaluation (UseCase 1819977)]]
- → Dependency: [[BSL-to-CIF mapping]]
- → UseCase: [[06.020 Update Client Data]]
- → Realisation: [[Client identification (Boundary 1813655)]]
- ← Dependency «invokes»: [[01.080 Fill in application (UseCase 1821367)]]
- ← Association: [[CIF (Actor 1880899)]]
- ← Dependency «invokes»: [[01.095 Create and evaluate application]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: Loan origination funcionality
- Custom: Overview
- Use Case: Client identification
- Use Case: Contract origination
- Use Case: Document copy management
