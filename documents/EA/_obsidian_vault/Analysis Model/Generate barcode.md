---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/BarCodes/Business rules"
domain: "Analysis Model"
element_id: 819951
diagrams: 7
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Generate barcode

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/BarCodes/Business rules

## 📝 Notes

This business rule describes how barcodes are generated for printed documents.

Input: (mandatory)Functionality, (mandatory)Code, (optional)DocumentType

Output:

	
- If Functionality = CP - contract package printing
System return string in following form V02<Functionality><Code>(CPCode)


	
- If Functionality = DD - direct debit document printing
System return string in following form V02<Functionality><Code>(DDMCode)
	
- If Functionality = CO or SP - contract or supplement document (other than DDM)
System return string in following form V02<Functionality><DocumentTypePrefix><Code> (contract or supplement code)

## 🔗 Connections (3)

- ← Dependency: [[DocumentData (Class 1351271)]]
- ← Dependency: [[LoanServiceRequestDocument]]
- ← Dependency: [[AlopRequestDocument]]

## 📊 Appears In (7 diagrams)

- Custom: Business rules
- Logical: HO_ALOP_DATA
- Logical: HO_CONTRACT_DATA - contract data
- Logical: HO_CONTRACT_PACKAGE
- Logical: HO_SERVICE_REQUEST_DATA
- Logical: HO_SERVICE_REQUEST_DATA - FER printout usage
- Logical: HO_SERVICE_REQUEST_DATA - PER printout usage
