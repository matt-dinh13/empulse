---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8484 GSTCalculatorService direct integration"
domain: "Requirements Model"
element_id: 1772598
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9042 Direct integration of GSTCalculatorService

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8484 GSTCalculatorService direct integration

## 📝 Notes

Direct integration of GSTCalculatorService:
 

	
- connector in feign


	
- url

C1/PP - https://dms.test.homecredit.in:8443/GSTCalculator/hci/gst/gstCalculations
Prod - https://dms.prod.homecredit.in/GSTCalculator/hci/gst/gstCalculations

	
- basic authorization, no role required to access this API
	
- switch useDirectGstIntegration

## 🔗 Connections (1)

- → Realisation: [[LOR-8484 GSTCalculatorService direct integration]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-8484 GSTCalculatorService direct integration
