---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v3"
domain: "Analysis Model"
element_id: 1853861
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}InsuranceOfferPreview_v3

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v3

## 📝 Notes

{ADD CSI-2721 /}
A structure of the Insurance offer response

## 🔗 Connections (1)

- ← Usage: [[Contract Insurance Services (Interface 1853845)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Insurance Services - GET: Contract Insurance Service offer preview create v3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serviceName | string |  |
| serviceCode | string |  |
| serviceVersion | int |  |
| premiumTariffItemCode | string |  |
| insurancePremiumAmount | money |  |
| currentMonthlyInstallment | money |  |
| futureMonthlyInstallment | money |  |
| firstDueDateInsurance | date |  |
| remainingInstallmentsCount | int |  |
| {ADD}sumInsured | money |  |
