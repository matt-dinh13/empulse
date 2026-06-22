---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Contract Service Support/Use Case Model"
domain: "Analysis Model"
element_id: 1879312
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Set Contract Service replacement Supplement values 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Contract Service Support/Use Case Model

## 📝 Notes

{ADD CSI-4317}{Country VN}
Extension of Contract Supplement for Contract service replacement

Input:

	
- SupplementCode = applicationCode
	
- Replaced service code and version (original service) (SQS.data)
	
- New service code and version (SQS.data)


Set:

	
- CustomData.key = OriginalServiceCode; CustomData.Value = OriginalServiceCode
	
- CustomData.key = OriginalServiceVersion; CustomData.Value = OriginalServiceVersion
	
- CustomData.key = NewServiceCode; CustomData.Value = NewServiceCode
	
- CustomData.key = NewServiceVersion; CustomData.Value = NewServiceVersion

## 🔗 Connections (1)

- ← Dependency: [[Create contract supplement rule (Requirement 1879308)]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract service replacement request processing
