---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Global system parameters/Card Management"
domain: "Analysis Model"
element_id: 1339103
diagrams: 9
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 Global Parameter

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Global system parameters/Card Management

## 📝 Notes

List of parameters used by various parts of the system.
For definition of each parameter see linked enumerations.

Structure of parameter description:

	
- Name - analytical meaning (use for referencing from analytical model; capital camelcase recommended)
	
- Value data type - analytical (string, boolean, complex = reference to another class, etc.); keep in mind that all parameters are saved as string 
	
- Default value (optional)
	
- Code - unique identifier, allowed characters {capital letter, number, _}
	
- Description - brief description of impacted functionality

## 🔗 Connections (9)

- → Dependency: [[Card Management Global Parameter]]
- → Dependency: [[{MOD}Sales Network Global Parameter]]
- → Dependency: [[{MOD}Contract Origination Global Parameter]]
- → Dependency: [[{MOD}Payment Management Global Parameter]]
- ← Dependency: [[Change the calculation of interest to accrued interest and future interest]]
- → Dependency: [[Technical Global Parameter]]
- → Dependency: [[General Global Parameter]]
- → Dependency: [[{MOD}Contract Management Global Parameter]]
- → Dependency: [[{MOD}Product Catalog Global Parameter]]

## 📊 Appears In (9 diagrams)

- Logical: Card Management Global Parameter
- Logical: Contract Management Global Parameter
- Logical: Contract Origination Global Parameter
- Logical: General Global Parameter
- Logical: Global parameters - OVERVIEW
- Logical: Payment Management Global Parameter
- Logical: Product Catalog Global Parameter
- Logical: Sales Network Global Parameter
- Logical: Technical Global Parameter

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string (30) |  |
| Name | string (255) |  |
| Value | string (1024) |  |
| Description | text |  |
