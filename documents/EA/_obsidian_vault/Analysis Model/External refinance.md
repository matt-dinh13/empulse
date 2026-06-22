---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Consolidation"
domain: "Analysis Model"
element_id: 1612892
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 External refinance

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Consolidation

## 📝 Notes

Grid containing the list of client's existing external loan contracts (i.e. contracts with any third party), that shall be consolidated/refinanced by respective application.

Visibly only if at least one external refinanced contract exists for the application (i.e. Contract->Temporary_Application->TempAppl_Refinanced_Contract[.Is_Internal=FALSE] exits).

Note: The ordering of individual records within the grid cannot be changed by user.

Other:
Detailed information (displayed in selected grid's columns) about the bank account linked to the external refinanced contract are retrieved by calling the GetPaymentChannelRequest (method of PaymentChannelWS) with following parameters on the input:
   - paymentChannelId = Contract->Temporary_Application->TempAppl_Refinanced_Contract[.Is_Internal=FALSE].Payment_Channel_ID

Localization code:
CON_External_Refinance

## 🔗 Connections (3)

- → Dependency: [[01.365 Add bank account for refinanced contract (UseCase 1817767)]]
- → Dependency: [[{MOD}01.366 Update bank account for refinanced contract]]
- → Dependency: [[{ADD}01.368 Update closure information for refinanced contract (UseCase 1817766)]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Consolidation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contract number | Contract Code |  |
| Amount | Financial Amount |  |
| Account number | text |  |
| Bank branch | text |  |
| Bank name | text |  |
| Create | button |  |
| Update | button |  |
