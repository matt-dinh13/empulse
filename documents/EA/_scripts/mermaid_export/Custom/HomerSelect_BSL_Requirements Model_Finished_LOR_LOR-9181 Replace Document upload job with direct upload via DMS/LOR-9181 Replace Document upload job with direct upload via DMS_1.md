# LOR-9181 Replace Document upload job with direct upload via DMS

```mermaid
graph TD
    LOR_9202_Remove_AFS_functionality["LOR-9202 Remove AFS functionality"]
    LOR_8855_Application_form_delete_document["LOR-8855 Application form - delete document"]
    LOR_9181_Replace_Document_upload_job_with_direct_upload_via_["LOR-9181 Replace Document upload job with direct upload via DMS"]
    LOR_8855_Application_form_delete_document -->|unnamed| LOR_9181_Replace_Document_upload_job_with_direct_upload_via_
    LOR_9202_Remove_AFS_functionality -->|unnamed| LOR_9181_Replace_Document_upload_job_with_direct_upload_via_
```
