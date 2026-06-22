---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA"
domain: "Analysis Model"
element_id: 1607552
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 FullEarlyRepaymentRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA

## 📝 Notes

Data structure for FER/CET/COP request type 
Values are taken from the Early Repayment Result object (Result)

## 🔗 Connections (1)

- ← Dependency: [[{MOD}RequestTypeChoice]]

## 📊 Appears In (1 diagrams)

- Logical: HO_SERVICE_REQUEST_DATA - FER printout usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| erFeesSum | MoneyType |  |
| overpayment | MoneyType |  |
| totalFuturePayments | MoneyType |  |
| totalOverdueInstallments | MoneyType |  |
| totalPayableInstallments | MoneyType |  |
| totalToPaid | MoneyType |  |
| unpaidPenaltiesSum | MoneyType |  |
| {ADD}totalPrepayments | MoneyType |  |
