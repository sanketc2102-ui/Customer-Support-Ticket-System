CREATE DATABASE customer_support_tickets_db;

USE customer_support_tickets_db ;

CREATE TABLE tickets (
    id INT PRIMARY KEY AUTO_INCREMENT,
    customerName VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    category ENUM('payment', 'technical', 'general') DEFAULT 'general',
    status ENUM('open', 'in_progress', 'resolved') DEFAULT 'open',
    description TEXT not null,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

SELECT * FROM tickets;
