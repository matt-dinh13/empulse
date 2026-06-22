# Browse incoming payment file

```mermaid
graph TD
    Confirmation_incoming_file_missing_deposit_date["Confirmation incoming file - missing deposit date"]
    Search["Search"]
    Reset["Reset"]
    Import_date_to["Import date to"]
    Import_date_from["Import date from"]
    List_of_incoming_payment_files["List of incoming payment files"]
    File_name["File name"]
    Browse_incoming_payment_files["Browse incoming payment files"]
    List_of_incoming_payment_files -->|If Deposit date is missing| Confirmation_incoming_file_missing_deposit_date
```
