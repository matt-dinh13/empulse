---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7585 (CLM-2727) Use REST API in communication with CIF"
domain: "Requirements Model"
element_id: 1878736
diagrams: 4
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Fill contractInstallment data source

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7585 (CLM-2727) Use REST API in communication with CIF

## 📝 Notes

This business rule describes actions that need to be executed in order to fill contractInstallment data source.

Input:
data displayed in Installment schedule (GUI): Client, Contract, list of Installment of selected version

Output:
contractInstallment data source filled with data

Content:
1. Fill XSD element contractCode with Contract.Code
2. Fill XSD element contractStatus with Contract.Status
3. Get list of ContractStatusTransition by Contact.Id where status = 'Signed' and get the first occurrence
4. Fill XSD element contractSignDate with ContractStatusTransition.CreationDate
5.{ADD CBL-CBL-11374} Fill XSD element terms with FinancialParameters.Terms {/ADD CBL-CBL-11374}
6. Fill XSD element installments with the list of Installment of selected version
7. Fill XSD element installmentScheduleVersion with the number of selected version
8. Fill XSD element loanType using business rule Business type of loan (get type of loan by Contract.Deal.Product.Product Profile)
9. Fill XSD element versionRecalculationDate with Contract.Installment.CreateDate (selected version)
10. Fill XSD element versionRecalculationReason with Contract.Installment.RecalculationReason (selected version)
11. Fill XSD element loanAmount with Contract.FinancialParameters.LoanAmount
12. Get fresh client data from CIF by calling PartyWS, method customerPersonGet with parameters externalId = Client.Id (CUID) and projections = 'ROLE_DATA' and 'PARTY_ADDRESSES'
13. Fill XSD element client with Data.Person from customerPersonGetResponse (step 11)
14. Fill XSD element clientAddress with Data.PostalAddresses where classification = 'permanent' from customerPersonGetResponse (step 11)
15. {ADD CBL-CBL-11374}  Fill XSD element clientPrefferedLanguage with Data.PrefferedLanguage  from customerPersonGetResponse {/ADD CBL-CBL-11374}

## 🔗 Connections (2)

- → Association: [[REQ#2 Update business logic for filling ContractInstallmentType data source]]
- ← Dependency: [[03.045 Generate IS printout (UseCase 1879450)]]

## 📊 Appears In (4 diagrams)

- Custom: Overview
- Use Case: Generating IS printouts
- Use Case: Generating IS printouts
- Use Case: OVERVIEW - Installment Schedule
