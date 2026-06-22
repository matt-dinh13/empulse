---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination"
domain: "Requirements Model"
element_id: 1826919
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Harvinder info

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination

## 📝 Notes

We are working on the https://jira.homecredit.net/jira/browse/CBL-16736 (EMI Card - VAS as a service -Termination) and I would like to consult some process details with you.
Our part of the process support starts after the client chooses purchase transaction offer (amount, terms,...) and related VAS (one or more). Technically, there is established a client's application in ADS with sales quotes (i.e. offers goods purchase, VAS), references to contract and client. There also has to be a payment channel for seller disbursement created and stored to the application in the ADS.
If all of the above mentioned is fulfilled, IN local system calls REST service-interpreter API (SIR) o run processing of the EMI transaction - see also the sequential diagram attached for next info.
Within the EMI transaction processing, SIR creates Transaction Supplement (TS), purchase transaction, offered services (VAS) in BSL, transactions to VAS and finally authorize all prepared transaction in the AM (account management).
Next step should be a transaction document generation. There can be two ways available - local solution, product solution.

	
- The local solution - all documents needed for EMI transaction are generated on the IN side
	
- The product solution - all documents are generated on the Transaction Supplement side


What it mean for you I try to describe in following paragraphs

## 🔗 Connections (1)

- → Dependency: [[TODO + OPEN QUESTIONS]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination
