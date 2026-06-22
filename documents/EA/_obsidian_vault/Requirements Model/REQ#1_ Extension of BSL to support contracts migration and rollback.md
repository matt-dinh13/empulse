---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-31177 (CLM-7629) Migrated contract support"
domain: "Requirements Model"
element_id: 1881643
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1: Extension of BSL to support contracts migration and rollback

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-31177 (CLM-7629) Migrated contract support

## 📝 Notes

IN only

Changes in the Logical model:
- new contract status MIGRATED (BSL code = M)

Changes in the UC:

	
- new UC Process ContractMigrated
	
- new UC Process ContractMigrationRollback
	
- new UC Process ContractMigrationSE
	
- new UC Process ContractMigrationRollbackSE


Changes in integration:
Provided:

	
- new version of ContractFullInfo v8 which support new contract status and new ContractSystemEvents
	
- CFI v8 is generated for all contracts
	
- CFI v5, v6, v7 is generated only for contracts with status<>M
	
- check all other API and integration where contract status is defined as enum and create a new version



Following UCs should be updated and add constraint for contract status:

	
- 08.030 Show service operation status
	
- 08.085 Replace Contract Service manually
	
- 01.113 Edit client document
	
- 01.105 Set document proof check
	
- 01.114 Set contract document security level
	
- 00.030 Add extended property
	
- 00.040 Remove extended property
	
- 07.040 Create communication record manually
	
- 07.050 Update communication record
	
- 05.093 Allow payments for a contract TODO
	
- 05.094 Block payments for a contract TODO
	
- 01.678 Change repeated disbursement channel via GUI


All BSL UC which works with contract status:

	
- check negative conditions for contract status (e.g. status <> 'N', status IsNotActive etc... )

## 📊 Appears In (1 diagrams)

- Custom: CBL-31177 (CLM-7629) Migrated contract support
