---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-10988 (BRID-1329) Update Salesroom on Application Management REST"
domain: "Requirements Model"
element_id: 1879296
diagrams: 13
connections: 25
tags:
  - usecase
  - requirements-model
---

# 🎯 {MOD}01.098 Update and evaluate application v9

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-10988 (BRID-1329) Update Salesroom on Application Management REST

## 📝 Notes

Use case updates data of the application, performs the client identification and sends the application for evaluation.

## 🔗 Connections (25)

- ← Realisation: [[ApplicationManagementWS_v22 (Interface 1819678)]]
- ← Realisation: [[ApplicationManagementWS_v21 (Interface 1820000)]]
- → Dependency: [[Specific attribute processing]]
- → UseCase «include»: [[06.020 Update Client Data]]
- → Dependency: [[Application validation rule]]
- → Dependency: [[Save application payment channel data]]
- → Dependency: [[Update application commodity]]
- → Dependency: [[Card service validity]]
- → Dependency: [[Select user based on SSO token]]
- → Realisation: [[01.098 Update application externally-all applications]]
- → Dependency: [[Create application commodity]]
- → Dependency: [[Insurance eligibility validation rule]]
- → Dependency: [[Algorithm_ Find user assigned to contract in 2BoD queue]]
- → Dependency: [[Application Processing]]
- → Dependency: [[Check that user is assigned to the same salesroom]]
- → Realisation: [[01.098 Update application externally]]
- → Dependency: [[Validate parameters for contract refinancing]]
- → UseCase «include»: [[01.150 Send to application evaluation (UseCase 1819974)]]
- → Dependency: [[Find application form configuration]]
- → Dependency: [[LOR-10988 (BRID-1329) Update Salesroom on Application Management REST]]
- → Dependency: [[Save application DDM data]]
- → Dependency: [[Create business event]]
- → Dependency: [[Create validation error message]]
- → Dependency: [[Creation of user]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (13 diagrams)

- Custom: LOR-10988 (BRID-1329) Update Salesroom on Application Management REST
- Custom: LOR-9160 - Save direct debit mandate data from application form via DDM REST API
- Custom: LOR-9202 Remove AFS functionality
- Custom: LOR-9371 - Update salesroom on application and contract via API
- Custom: LOR-9883 Remove obsolete switches related to applicant
- Custom: PAYM-1613 - createOrUpdateContract2BankAccount
- Custom: PAYM-1613 - other methods
- Custom: PAYM-1613 - savingOfPaymentChannels
- Custom: PAYM-1613 - updateContractFromTemporaryApplication
- Logical: ApplicationManagementWS_v21 - UpdateAndEvaluateApplication
- Logical: ApplicationManagementWS_v22 - UpdateAndEvaluateApplication
- Use Case: Access Rights
- Use Case: Use Case
