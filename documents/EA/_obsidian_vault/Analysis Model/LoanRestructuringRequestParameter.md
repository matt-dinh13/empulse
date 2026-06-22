---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA"
domain: "Analysis Model"
element_id: 1607555
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 LoanRestructuringRequestParameter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA

## 📝 Notes

Attributes related to Loan Restructuring Request. It presents loan parameters after restructuring.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}RequestTypeChoice]]

## 📊 Appears In (1 diagrams)

- Logical: HO_SERVICE_REQUEST_DATA

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| firstDueDateRestructured | date |  |
| interestRate | decimal |  |
| monthlyPayment | MoneyDto |  |
| term | int |  |
| presentedInterestRate | decimal |  |
| {ADD}totalAmountRestructured | MoneyDto |  |
| {ADD}principalAmountRestructured | MoneyDto |  |
| {ADD}interestAmountRestructured | MoneyDto |  |
| {ADD}otherAmountRestructured | MoneyDto |  |
| {ADD}monthlyAnnuity | MoneyDto |  |
| {ADD}totalTerm | int |  |
| {ADD}providedCreditAmount | MoneyDto |  |
