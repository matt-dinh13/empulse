---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850577
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Determine the Loan Process type based on the provided Sales Quotes

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to find Loan Process type in the configuration file based on the provided Sales Quote data

Input:

	
- SalesQuote[] -- array of Sales Quote objects

Output:

	
- loanProcessType
	
- SalesQuote[] -- extended with masterTransaction flag



	
- System reads out Setting from the configuration file
	
- System tries to find a loanProcessType by combination of SalesQuote[].purpose and SalesQuote[].transactionType in all SalesQuote[] objects
	
- If the loanProcessType is found for a combination in the SalesQuote[],
- the SalesQuote[] is marked as masterTransaction 
- loanProcessType is returned in the output


Configuration file definition:
---
loanProcessTypeConfig:
   purpose: "EPP"
   transactionType: "RPD"
   loanProcessType: "EMI_VAS"
{ADD CSI-2861}
--
   purpose: "CASH_TRX"
   transactionType: "RCD"
   loanProcessType: "FLEXI_CASH"
{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[16.020 Process request for a loan]]

## 📊 Appears In (1 diagrams)

- Use Case: Service Interpreter - Use Case Model
