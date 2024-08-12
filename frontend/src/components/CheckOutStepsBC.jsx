import React from 'react';
import { Stack, Breadcrumbs, Typography } from '@mui/material';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

const CheckOutStepsBC = ({ step1, step2, step3, step4 }) => {
    return (
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Nav.Item>
              {step1 ? (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <Typography color={!step2 ? "primary" : "textPrimary"} variant={!step2 ? "h3" : "subtitle1"}>
                      Sign In
                    </Typography>
                  </Nav.Link>
                </LinkContainer>
              ) : (
                <Nav.Link disabled>
                  <Typography color="textSecondary" variant="subtitle1">
                    Sign In
                  </Typography>
                </Nav.Link>
              )}
            </Nav.Item>
            <Nav.Item>
              {step2 ? (
                <LinkContainer to="/shipping">
                  <Nav.Link>
                    <Typography color={!step3 ? "primary" : "textPrimary"} variant={!step3 ? "h3" : "subtitle1"}>
                      Shipping
                    </Typography>
                  </Nav.Link>
                </LinkContainer>
              ) : (
                <Nav.Link disabled>
                  <Typography color="textSecondary" variant="subtitle1">
                    Shipping
                  </Typography>
                </Nav.Link>
              )}
            </Nav.Item>
            <Nav.Item>
              {step3 ? (
                <LinkContainer to="/payment">
                  <Nav.Link>
                    <Typography color={!step4 ? "primary" : "textPrimary"} variant={!step4 ? "h3" : "subtitle1"}>
                      Payment
                    </Typography>
                  </Nav.Link>
                </LinkContainer>
              ) : (
                <Nav.Link disabled>
                  <Typography color="textSecondary" variant="subtitle1">
                    Payment
                  </Typography>
                </Nav.Link>
              )}
            </Nav.Item>
            <Nav.Item>
              {step4 ? (
                <LinkContainer to="/placeorder">
                  <Nav.Link>
                    <Typography color="primary" variant="h3">
                      Place Order
                    </Typography>
                  </Nav.Link>
                </LinkContainer>
              ) : (
                <Nav.Link disabled>
                  <Typography color="textSecondary" variant="subtitle1">
                    Place Order
                  </Typography>
                </Nav.Link>
              )}
            </Nav.Item>
          </Breadcrumbs>
        </Stack>
      );
    };

export default CheckOutStepsBC;
