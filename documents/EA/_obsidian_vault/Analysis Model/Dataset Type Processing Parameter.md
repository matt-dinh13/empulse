---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Data prepared notification/Logical data model"
domain: "Analysis Model"
element_id: 1443626
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Dataset Type Processing Parameter

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Data prepared notification/Logical data model

## 📝 Notes

List of parameters related to dataset processing
For definition of each parameter see linked enumeration(s).

Parameters can be used regardless on dataset acquiring method - idea is to have no difference in processing whether dataset (file typically) was uploaded via UI or transfered from external system. 

Structure of parameter description in linked enumeration(s):

	
- Name - analytical meaning (use for referencing from analytical model; capital camelcase recommended)
	
- Value data type - analytical (string, boolean, complex = reference to another class, etc.)
	
- Default value (optional)


Note for implementation

	
- Value of parameters will be set by system support and developement, not business
	
- Parameters will be changed very rarely

## 🔗 Connections (2)

- → Aggregation: [[Dataset Type]]
- → Dependency: [[File Import Dataset Type Processing Parameter]]

## 📊 Appears In (1 diagrams)

- Logical: Data prepared notification - LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Name |  |  |
| Value |  |  |
