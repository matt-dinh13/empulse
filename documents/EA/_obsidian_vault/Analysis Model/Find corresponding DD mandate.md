---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case"
domain: "Analysis Model"
element_id: 1753485
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Find corresponding DD mandate

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case

## 📝 Notes

Rule describes how to find corresponding DD mandate for imported DD statement record from XML file.

Find active DD mandate (DDM) satisfying following conditions:


	
- a) DDM code (DDM.Code) coresponds to value of XML element ddmReference or
b) external code (DDM.External_Code) coresponds to value of XML element externalReference or
c) code (CONTRACT.CODE) of the associated contract (DDM.CONTRACT) corresponds to value of XML element contractReference
	
- bank account corresponds with bank account specified in XML (DDM.BANK_ACCOUNT.ACCOUNT_NUMBER = value of XML element clientBankAccountNumber and DDM.BANK_ACCOUNT.BANK_BRANCH.MICR = value of XML element clientBankBranchSecondaryCode)
	
- DD mandate is valid for DD statement due date (DDM.VALID_FROM <= value of XML element dueDate <= DDM.VALID_TO)


Note to validation in point 1:
If both references are filled, system finds the corresponding mandate in the following order:

	
- by ddmReference,
	
- by externalReference,
	
- by contractReference.

If ddmReference is not empty, but no DDM with corresponding code is found, system does not continue with contractReference and DDS will not be imported.

## 🔗 Connections (2)

- → Dependency: [[REQ3.4 Process DDS confirmations]]
- ← Dependency: [[05.260 Process DD confirmations import (UseCase 1863211)]]

## 📊 Appears In (2 diagrams)

- Use Case: Automatic import DD statements and confirmations
- Use Case: Direct Debit statements
