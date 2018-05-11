import React from 'react';
import { Router, Route, Link } from 'react-router';
import request from '@/Utils/request';

export async function getQueryActivities() {
  return request('api/modular/view/list', {
    method: 'GET',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });
}; 

export async function setQueryActivities() {
  return request('http://result.eolinker.com/B7hctqTb702bbc604f0da172f3daace6519bd929e93fae2?uri=api/modular/view/list', {
    method: 'POST',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });
}; 