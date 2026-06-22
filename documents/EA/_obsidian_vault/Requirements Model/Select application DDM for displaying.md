---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9306 - Update direct debit mandate from Application detail via DDM REST API"
domain: "Requirements Model"
element_id: 1821077
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Select application DDM for displaying

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9306 - Update direct debit mandate from Application detail via DDM REST API

## 📝 Notes

This object describes the steps, how system selects the particular instance of application DDM, which shall be displayed on the respective screen.

Input:
- DDM [1..n] = object of the application DDM

Output:
- DDMForDisplaying = object of the application DDM, which shall be displayed

Steps:

	
- System takes each DDM from the input and performs the following sub-steps:

1.1. If there is only one DDM record available, then system selects it as DDMForDisplaying.

1.2. If there are multiple DDM records available and they are all in status Canceled (i.e. DDM.Status = 'CNC' / GetDDMResponse.ddmData.status = 'CNC'), then system selects the DDM with the lowest code's value (DDM.Code / GetDDMResponse.ddmData.ddmCode) as DDMForDisplaying.

1.3. Otherwise system filters out all the DDM records in status Canceled (i.e. DDM.Status = 'CNC' / GetDDMResponse.ddmData.status = 'CNC') first and then selects the DDM with the lowest code's value (DDM.Code / GetDDMResponse.ddmData.ddmCode) from the remaining ones as DDMForDisplaying.
.
	
- System takes the respective DDMForDisplaying and returns it to the calling object.
	
- Algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.210 Show contract detail]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9306 - Update direct debit mandate from Application detail via DDM REST API
- Custom: Operations with application DDM
