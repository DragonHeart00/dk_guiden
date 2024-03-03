import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { categoryData } from "./categoryData";

const Category = ({ onCategoryChange }) => {
    const [selectedValue, setSelectedValue] = useState('RESTAURANTER');
    const handleChange = (event) => {
        const category = event.target.value;
        setSelectedValue(category);
        onCategoryChange(category); // Notify the parent component
    };

    const firstColumnCategories = categoryData.slice(0, 4);
    const secondColumnCategories = categoryData.slice(4);

    return (
        <Row >
            {/* First Column */}
            <Col xs={6} md={3} >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {firstColumnCategories.map((category, index) => (
                        <Form.Check
                            key={index}
                            type="radio"
                            id={category.name}
                            label={
                                <>
                                    <img src={category.image} alt={category.name} style={{ width: '35px', height: '35px', borderRadius: '50%', marginBottom: '5px', alignContent:"center" }} />
                                    <div style={{ alignContent: "center", fontSize: 12, fontWeight: selectedValue === category.name ? 'bold' : 'revert', color: selectedValue === category.name ? '#0f0f0c' : 'black' }}>{category.name}</div>
                                </>
                            }
                            checked={selectedValue === category.name}
                            onChange={handleChange}
                        />
                    ))}
                </div>
            </Col>
            {/* Second Column */}
            <Col xs={6} md={3}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {secondColumnCategories.map((category, index) => (
                        <Form.Check
                            key={index}
                            type="radio"
                            id={category.name}
                            label={
                                <>
                                    <img src={category.image} alt={category.name} style={{ width: '35px', height: '35px', borderRadius: '50%', marginBottom: '5px', alignContent:"center" }} />
                                    <div style={{ alignContent: "center", fontSize: 12, fontWeight: selectedValue === category.name ? 'bold' : 'revert', color: selectedValue === category.name ? '#0f0f0c' : 'black' }}>{category.name}</div>
                                </>
                            }
                            checked={selectedValue === category.name}
                            onChange={handleChange}
                        />
                    ))}
                </div>
            </Col>
        </Row>
    );
};

export default Category;
