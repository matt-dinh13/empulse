---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model"
domain: "Analysis Model"
element_id: 1538435
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Found payments

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model

## 📝 Notes

Grid of found payments.
Default ordering: creation time asc, recipient asc, amount desc, status asc, id of payment asc

If one of search options (Standard, Unpaid,Contract, POS, OriginatingPOS) is chosen then it is available select particular record, select all and deselect all records.
Only payments where all the following conditions are met:

	
- Outgoing Payment.isBlocked = false


	
- Status is in (Unpaid, Ready for redisbursement, Not Delivered)
	
- Payable date is <= current date

can be selected.

Grid rows limit is defined by global parameter OutgoingPaymentsGridLimit. 
If the search result contains more items than is allowed by the limit then:

	
- the text PAY_TooManyResults is displayed under the grid with number of found payments
	
- list of found outgoing payments is empty
	
- user can select/deselect only all found (but not displayed) payments at once


Paging: Yes

## 🔗 Connections (5)

- ← Dependency: [[Export file - list of outgoing payments]]
- → Dependency: [[05.125 Export dispatch note file (UseCase 867416)]]
- → Dependency: [[{MOD}01.210 Show contract detail]]
- → Dependency: [[{MOD}Get recipient data]]
- → Dependency: [[Determinate Transaction Code for Outgoing payment]]

## 📊 Appears In (1 diagrams)

- Custom: Browse outgoing payments screen

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Checkbox | checkbox |  |
| Payable date | Date |  |
| Payment order ID | Number |  |
| OBS Order Number | Text |  |
| OBS Paid Date | Text |  |
| Creation time | datetime |  |
| Contract number | Contract code |  |
| Originating POS | Salesroom code |  |
| Amount | Financial Amount |  |
| Recipient name | Text |  |
| Recipient bank account | Text |  |
| Recipient bank code | Text |  |
| {MOD}Transaction ID | Text |  |
| Payment type | Outgoing Payment Type |  |
| Status | Short Text |  |
| Is blocked | Boolean |  |
| {ADD}Joint-lending Partner Code | string |  |
| {ADD}Payment Detail | button |  |
