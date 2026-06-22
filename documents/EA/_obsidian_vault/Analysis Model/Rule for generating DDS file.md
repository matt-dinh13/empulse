---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case"
domain: "Analysis Model"
element_id: 1753479
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Rule for generating DDS file

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case

## 📝 Notes

1. 	Create DD statements file record (DIRECT_DEBIT_STATEMENT_FILE)
2. 	Set DD statement file creation date (DIRECT_DEBIT_STATEMENT_FILE.CREATION_DATE) to now
3. 	Set DD statement file name (DIRECT_DEBIT_STATEMENT_FILE.NAME) to “DirectDebits_%DD_channel%_%due_date%_%creation_date%_N.xml” where

	
- %DD_channel% is DD channel of DD statements contained in file
	
- %due_date% is due date of DD statements  contained in file in YYYY-MM-DD format
	
- %creation_date% is date of file creation in YYYY-MM-DD format
	
- %N% is sequence number per day and DD channel

4. 	Generate file content according to defined XML structure (described in attached XSD file)
5. 	Set file content (DIRECT_DEBIT_STATEMENT_FILE.FILE) to generated file content

## 🔗 Connections (1)

- ← Dependency: [[{MOD}05.160 Generate DD statement file]]

## 📊 Appears In (1 diagrams)

- Use Case: Direct Debit statements
