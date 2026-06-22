---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case"
domain: "Analysis Model"
element_id: 1753482
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Create direct debit statement confirmation file record

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case

## 📝 Notes

- 
	
- Create direct debit statement import file record (DIRECT_DEBIT_STATEMENT_CONFIRMATION_FILE) for each used file (always imported file and if were created, then file of processed and file of unprocessed records as well)
	
- Set content (DIRECT_DEBIT_STATEMENT_CONFIRMATION_FILE.FILE) to content of imported file / content of newly created file
	
- Set name (DIRECT_DEBIT_STATEMENT_CONFIRMATION_FILE.NAME) to name of imported file / content of newly created file
	
- Set time of import (DIRECT_DEBIT_STATEMENT_CONFIRMATION_FILE.IMPORTED) to now

## 🔗 Connections (1)

- ← Dependency: [[05.260 Process DD confirmations import (UseCase 1863211)]]

## 📊 Appears In (2 diagrams)

- Use Case: Automatic import DD statements and confirmations
- Use Case: Direct Debit statements
