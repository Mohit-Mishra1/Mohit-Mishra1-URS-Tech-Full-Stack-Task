const Contact = require('../models/Contact');

// Create Contact
exports.createContact = async (req, res) => {
    const { first_name, last_name, email, mobile_number, data_store } = req.body;

    if (data_store === 'DATABASE') {
        const contact = new Contact({ first_name, last_name, email, mobile_number });
        await contact.save();
        res.json({ message: 'Contact created in Database', contact });
    } else if (data_store === 'CRM') {
        try {
            const response = await fetch(
                'https://student-764792468610629639.myfreshworks.com/crm/sales/api/contacts',
                {
                    method: 'POST',
                    headers: {
                        Authorization: 'Token token=6hR_snabG8W8P-JtIyIbhw',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        contact: { first_name, last_name, email, mobile_number }
                    })
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            res.json({ message: 'Contact created in FreshSales CRM', contact: data });
        } catch (error) {
            res.status(500).json({ message: 'Error creating contact in FreshSales CRM', error: error.message });
        }
    } else {
        res.status(400).json({ message: 'Invalid data_store value' });
    }
};

// Get Contact
exports.getContact = async (req, res) => {
    const { contact_id, data_store } = req.body;

    if (data_store === 'DATABASE') {
        const contact = await Contact.findById(contact_id);
        if (contact) {
            res.json(contact);
        } else {
            res.status(404).json({ message: 'Contact not found in Database' });
        }
    } else if (data_store === 'CRM') {
        try {
            const response = await fetch(
                `https://student-764792468610629639.myfreshworks.com/crm/sales/api/contacts/${contact_id}`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: 'Token token=6hR_snabG8W8P-JtIyIbhw',
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching contact from FreshSales CRM', error: error.message });
        }
    } else {
        res.status(400).json({ message: 'Invalid data_store value' });
    }
};

// Update Contact
exports.updateContact = async (req, res) => {
    const { contact_id, new_email, new_mobile_number, data_store } = req.body;

    if (data_store === 'DATABASE') {
        const contact = await Contact.findByIdAndUpdate(
            contact_id,
            { email: new_email, mobile_number: new_mobile_number },
            { new: true }
        );
        res.json({ message: 'Contact updated in Database', contact });
    } else if (data_store === 'CRM') {
        try {
            const response = await fetch(
                `https://student-764792468610629639.myfreshworks.com/crm/sales/api/contacts/${contact_id}`,
                {
                    method: 'PUT',
                    headers: {
                        Authorization: 'Token token=6hR_snabG8W8P-JtIyIbhw',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        contact: { email: new_email, mobile_number: new_mobile_number }
                    })
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            res.json({ message: 'Contact updated in FreshSales CRM', contact: data });
        } catch (error) {
            res.status(500).json({ message: 'Error updating contact in FreshSales CRM', error: error.message });
        }
    } else {
        res.status(400).json({ message: 'Invalid data_store value' });
    }
};

// Delete Contact
exports.deleteContact = async (req, res) => {
    const { contact_id, data_store } = req.body;

    if (data_store === 'DATABASE') {
        await Contact.findByIdAndDelete(contact_id);
        res.json({ message: 'Contact deleted from Database' });
    } else if (data_store === 'CRM') {
        try {
            const response = await fetch(
                `https://student-764792468610629639.myfreshworks.com/crm/sales/api/contacts/${contact_id}`,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: 'Token token=6hR_snabG8W8P-JtIyIbhw',
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            res.json({ message: 'Contact deleted from FreshSales CRM' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting contact from FreshSales CRM', error: error.message });
        }
    } else {
        res.status(400).json({ message: 'Invalid data_store value' });
    }
};
