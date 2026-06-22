---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Requirement Model/CBL-27126 BREIT-82 - COMA, SUP, COS, SIR MVP Functionalities"
domain: "Modules"
element_id: 1872729
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {MOD}Determine the Loan Process type based on the provided Sales Quotes

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Requirement Model/CBL-27126 BREIT-82 - COMA, SUP, COS, SIR MVP Functionalities

## 📝 Notes

This rule describes how to find Loan Process type in the configuration file based on the provided Sales Quote data. Based on the process type, the "master" SalesQuote is defined (purchase transaction).

Input:

	
- SalesQuote[] -- array of Sales Quote objects

Output:

	
- loanProcessType
	
- supplementType
	
- SalesQuote[] -- extended with masterTransaction flag



	
- {DEL DOBA-78}If only one SalesQuotes[].type = ACCOUNT_CREATION is found, set
- supplementType = ACCOUNT_CREATION
- loanProcessType = SERVICE 
Return -- only account will be created in AM; no transaction is processed
	
- If one or more SalesQuotes[].type = TRANSACTION is found, then -- Account with transaction, or only transaction is processed{/DEL}{ADD DOBA-78}System gets all SalesQuotes where SalesQuotes[].type = TRANSACTION
a. System reads out Setting from the configuration file
b. System tries to find a loanProcessType by combination of SalesQuote[].purpose and SalesQuote[].transactionType in all SalesQuote[] objects where type <> ACCOUNT_CREATION
c. If the loanProcessType is found for a combination in the SalesQuote[],
   - the SalesQuote[] is marked as masterTransaction 
   - loanProcessType and supplementType is returned in the output
If no or more SalesQuotes is found, an exception is returned.
	
- Return


Configuration file definition: -- it is example only, not final version!!!
---
loanProcessTypeConfig:
   purpose: "EPP"
   transactionType: "RPD"
   loanProcessType: "EMI_VAS"
--
   purpose: "CASH_TRX"
   transactionType: "RCD"
   loanProcessType: "FLEXI_CASH"

## 🔗 Connections (1)

- ← Dependency: [[{ADD}16.022 Process Sales Quotes for Transaction]]

## 📊 Appears In (3 diagrams)

- Use Case: SIR - Add Contract and Account creation steps into processing - use cases
- Use Case: SIR - Process Sales Quotes for Transaction
- Use Case: Transaction origination - Use Case Model
