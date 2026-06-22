---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination"
domain: "Requirements Model"
element_id: 1826905
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Transaction docs generating (local solution / product solution)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination

## 📝 Notes

Using the local solution - all documents for the EMI transaction is generated on IN side

	
- It will be needed to define Document Type for the Transaction Supplement definition
	
- Within the EMI transaction processing by SIR:
- after all transaction are successfully authorized in the AM, system generates ALOPRequestApprovedSE event.
- on this event, system generates a Document including printout (it doesn't matter on the printout content in this moment - this file won't be used for client). The printouts are stored into Cabinet.
- finally, system sends the TransactionSupplementDocumentPrepared notification. From this moment, the system will wait for confirmation of the EMI transaction acceptation (client signature) 
	
- The notification is consumed by the local system. The local system has to ensure generation of all transaction document which are provided to client.
	
- After the client signs the documents, the local system must call the TS API to the transaction acceptation (i.e. calling of /transaction-supplement/acceptation API). It would be also good, if the local system upload the signed documents into the DMS (printout will be uploaded into Cabinet to the original document as a new revision).
	
- TS system performs confirmation of the all authorized transaction in the AM.


Using product solution  (implemented in TS system)

	
- It will be needed to define Document Type for the Transaction Supplement definition
	
- IN must define needed data and printout templates for the printouts
	
- Within the EMI transaction processing by SIR:
- after all transaction are successfully authorized in the AM, TS system generates ALOPRequestApprovedSE event.
- on this event, system generates all needed Documents including their printouts. The printouts are stored into Cabinet.
- finally, system sends the TransactionSupplementDocumentPrepared notification. From this moment, the TS system will wait for confirmation of the transaction acceptation (client signature)
	
- The notification is consumed by the local system.
	
- The local system calls DMS for getting Documents and their file (printout) references. Next it downloads the printouts from the Cabinet (based on the file references).
	
- These files are provided to client.
	
- After the client signs the documents, the local system must call the TS API to the transaction acceptation.
	
- TS system performs confirmation of the all authorized transaction in the AM.

## 🔗 Connections (1)

- → Generalization: [[TODO + OPEN QUESTIONS]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination
