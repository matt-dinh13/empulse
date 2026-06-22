---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules"
domain: "Analysis Model"
element_id: 1878892
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Check scan of the document is uploaded

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules

## 📝 Notes

This algorithm checks all the documents which are set (Document_Type_Flag.Document_Type_Flag_Type = 'IS_SCAN_NEEDED') to have their scans uploaded.

Input:
Ordered list of documents and their attributes (from Generate documents list for contract registration business rule/algorithm).

Output:
List of the documents with the missing scan.

1. For each document from the list of the documents system checks:  

2. If attribute Document_Type.Document_Type_Flag = 'CREDIT_DOC' and
    Document_Type.Document_Type_Flag = 'IS_SCAN_NEEDED' then:  

3. If DMS_File.External_ID is null (object is referenced by DMS_File_ID) 
    then if DMS_File.BLOB is null then:    
         Add the document's name on the list.
    else continue.

4. Return the list of the documents with missing scan.

## 🔗 Connections (1)

- ← Dependency: [[01.200 Add to contract package (UseCase 1759983)]]

## 📊 Appears In (2 diagrams)

- Custom: Common Business Rules for Contract Management
- Use Case: Contract tracking
