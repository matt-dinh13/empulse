---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-22574 (CSI-2938) Convert CARD BALANCE to installment plan"
domain: "Requirements Model"
element_id: 1815404
diagrams: 1
connections: 7
tags:
  - requirement
  - requirements-model
---

# 📋 Business Requirement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-22574 (CSI-2938) Convert CARD BALANCE to installment plan

## 📝 Notes

Supported business process:

Client using Flexi loan ( type of REL product with standard behaviour) is entitled to ask for conversion of the remaining debt on the account into fixed installment plan at any time within 36 months. After the 36 months is the mentioned debt converted to the installment plan automatically.

Goal of the requirement is recording the conversion requests as a contract supplement (CSI). For each conversion request, a specific sales quote with defined number of installments must be created (ASQ responsibility)

Supposed extensions of the standard supplements functionality:

	
- new type of Supplement (definition)
	
- storing additional data to Contract Supplement if needed (a sales quote, financed amount)
	
- expose an API for the Conversion Supplement creation (input will be a specific sales quote with chosen number of installments, account number)
	
- expose get method for the Conversion Supplement - needed for DSM: input = contract supplement code
	
- some validations before the supplement creation:
- account status
- sales quote of the CONS purpose must exists in SQS
- CBT supplement existence: for IN can only one "in process/active" supplement of this type exists; for VN, there can be more CBT supplement in status ACCEPTED but only one "in process" status.
	
- creation of document printouts; DSM for creation of data source for printouts - REL_CONVERSION_SUPPLEMENT (IN only)
	
- expose method for the supplement confirmation (IN only)
	
- new integration for AM to pushing the conversion requests - see AM POST method proposal
	
- extension the current ContractSupplement notifications streamed to KAFKA
	
- the current GET methods of ContractSupplement API must be able to provide the conversion requests data
	
- An orchestration will be ensured by Zeebe (AM/BOOK)


AM method proposal
POST method /api/public/v1/accounts/{accountNumber}/card-balance-to-IP 

	
- used for manual request for the conversion of the card balance to IP
	
- account will be blocked for further transactions

Input

	
- accountNumber
	
- financedAmount
	
- offerCode

Output

	
- resultCode
	
- errorMessage

The mentioned supplement functionality for the conversion will be available either for bulk processing the conversion requests (automatic conversion after 36 months). The bulk processing will be triggered externally, or as single request from customer (via GMA) for conversion.

Transfer Account Balance
Account Balance Conversion
Account Balance Transfer
Card Balance Transfer Supplement
Conversion Supplement

## 🔗 Connections (7)

- ← Generalization: [[CSI-3267 Card Balance Transfer Supplement documents]]
- ← Generalization: [[CSI-3268 Process Card Balance Transfer request on Contract Supplement]]
- ← Generalization: [[CSI-3347 Process Card Balance Transfer request on Contract Supplement update]]
- ← Generalization: [[CSI-3258 Create Card Balance Transfer Supplement method]]
- ← Generalization: [[CSI-3259 New Supplement definition for Balance Transfer]]
- ← Generalization: [[Create association between Contract and Loan confirmation document]]
- ← Generalization: [[Make Card Balance Transfer call asynchronnous]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-22574 (CSI-2938) Convert CARD BALANCE to installment plan
