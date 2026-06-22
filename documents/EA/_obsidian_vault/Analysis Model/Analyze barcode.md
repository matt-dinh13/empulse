---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/BarCodes/Business rules"
domain: "Analysis Model"
element_id: 819950
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Analyze barcode

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/BarCodes/Business rules

## 📝 Notes

Input: scanned barcode - string sequence

Steps:
1. Analyze barcode version- variant is 3-character length sequence on beginning of barcode in form "V\d\d (\d is digit). If barcode doesn't start with version then version of barcode is 1, "V02" means version 2, etc.
2. Analyze barcode:
Version I. 
If barcode continues with "CP" and numbers   system returns considers barcode as Contract package printout and system returns contract package code (numbers part)
Else if barcode continues with 2 letters and numbers system considers barcode as contract documents and system returns ContractCode (number part) , DocumentType (according to 2 letters from DocumentType) and DocumentID 

Version II.
If barcode continues with "CP" and numbers  system returns considers barcode as Contract package printout and system returns contract package code (numbers part)
Else if barcode continues with "DD" and numbers  system consibers barcode as DDM document and system returns ContractCode, DocumentType and DocumentID and DDM code
Else if barcode continues with "SP" then "XX" (two alpha characters) and numbers  system considers barcode as supplement document and system returns SupplementCode (number part), DocumentType (according to 2 letters from DocumentType) and DocumentID and Contract code (for given supplement)
Else if barcode continues with "CO" then "XX" (two alpha characters) and numbers  system considers barcode as contract document and system returns ContractCode (number part), DocumentType (according to 2 letters from DocumentType) and DocumentID

## 📊 Appears In (1 diagrams)

- Custom: Business rules
