---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model"
domain: "Analysis Model"
element_id: 1878541
diagrams: 1
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Generate outgoing payments file

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model

## 📝 Notes

Input:

	
- HC bank account (BANK_ACCOUNT having BANK_ACCOUNT.HOLDER_TYPE = HC)
	
- set of payment orders (OUTGOING_PAYMENT_ORDER)


Constraints:

	
- global parameter OutgoingPaymentsGenerateFiles = TRUE



Output:

	
- created file record (OUTGOING_PAYMENT_FILE) with payment orders (containing file itself)


Pre-processing:
System excludes Payment Orders where Amount =< 0. 


Steps:
1. System creates outgoing payments file record (OUTGOING_PAYMENT_FILE) 
{ADD CBL-8501 PAYM-2753}File is containing only payments which are disbursed. Payments which were disbursed in past or are staying unpaid wont be presented in generated payment order{/ADD}
2. System associates the file record with provided HC bank account (OUTGOING_PAYMENT_FILE.BANK_ACCOUNT = provided bank account)

3. System associates all payment orders in the set with created file record (OUTGOING_PAYMENT_ORDER.FILE = created file record)

4. System groups payment orders by currency

5. System takes next unprocessed group of payment orders. If all groups identified in step 4 have been processed, continue to step 7.

6. System creates outgoing payment order sum record (OUTGOING_PAYMENT_ORDERS_SUM) with following attributes:

	
- sum of orders (OUTGOING_PAYMENT_ORDERS_SUM.ORDERS_SUM) = count of payment orders in group
	
- sum of amounts (OUTGOING_PAYMENT_ORDERS_SUM.AMOUNTS_SUM) = sum of amounts of payment orders (OUTGOING_PAYMENT_ORDER.AMOUNT) in group
	
- file (OUTGOING_PAYMENT_ORDERS_SUM.FILE) = created file record


7. System stores file name in the file record (OUTGOING_PAYMENT_FILE.NAME) by Outgoing Payment File name definition - general 

8. System sets creation time attribute in the file record (OUTGOING_PAYMENT_FILE.CREATION_TIME) to now.

9. System generates XML content according to defined structure Outgoing Payment File Structure
10. System assigns generated file to the file record (OUTGOING_PAYMENT_FILE.File Descriptor)

## 🔗 Connections (4)

- → Dependency: [[REQ#1 Disable of generation payment order file on KZ environment]]
- → Dependency: [[Requirement3 - Generate outgoing payment orders with settlements]]
- → Dependency: [[Outgoing Payment File name definition - general]]
- ← Dependency: [[{MOD}05.230 Process outgoing payments]]

## 📊 Appears In (1 diagrams)

- Use Case: Process outgoing payments
