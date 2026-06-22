---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v1.0"
domain: "Analysis Model"
element_id: 1853876
diagrams: 5
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 InsuranceCommodity

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v1.0

## 📝 Notes

Insured Commodity info
{ADD CLM-99}The commodity data is obtained as response of calling CommodityWS.GetCommodityData - see rules described in the UC 01.759 Get contract services for self-care {/ADD}

## 🔗 Connections (1)

- → Aggregation: [[Insurance (Class 1853871)]]

## 📊 Appears In (5 diagrams)

- Logical: Contract Insurance Services - GET: Contract list Insurances
- Logical: Contract Insurance Services - POST: Contract Insurance Service
- Logical: Contract Insurance Services - PUT: Contract Insurance Service Cancel
- Logical: Contract Insurance Services - PUT: Contract Insurance Service Terminate
- Logical: Contract Services - GET contract services

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commodityType | string |  |
| name | string |  |
| producer | string |  |
| modelNumber | string |  |
| serialNumber | string |  |
| engineNumber | string |  |
| imei | string |  |
| color | string |  |
| price | money |  |
| commodityExternalId | string |  |
