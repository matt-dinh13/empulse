---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8016 (CLM-2483) Replication of ID documents to PIF"
domain: "Requirements Model"
element_id: 1494680
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #2 - Replication of ID documents to PIF

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8016 (CLM-2483) Replication of ID documents to PIF

## 📝 Notes

Goal of this task is sending identification documents newly created/updated after Contract signature into the PIF system.
Impacted documents to be sent – all identification documents (i.e. with flag PRIM_IDENT on the Document Type).
IN business wants to avoid entering possible changes of KYC document within the registration process in the PIF changes.

Following activities will be performed as part of this requirement:

	
- Integration of PIF REST API Customer data.update
	
- Development of function for updating Clients document via PIF REST API after their change. This function is controlled by CLM Feature Flag updateClientDocumentsAfterContractSign.

## 📊 Appears In (1 diagrams)

- Custom: CBL-8016 (CLM-2483) Replication of ID documents to PIF
