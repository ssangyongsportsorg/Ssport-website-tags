import React from 'react';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

export default function Header() {
  return (
       <div>

        <DocSearch
          apiKey="c2e792c2e75fe1dd3e40574f8b4c9a80"
          appId="70GEOCJCSX"
          indexName="help"
        />

    </div>
  );
}
