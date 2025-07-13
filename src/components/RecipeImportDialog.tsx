import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Tabs,
  Tab,
  Box,
  Button,
  TextField,
  IconButton
} from '@mui/material';
import {
  Close,
  Link,
  Instagram,
  Edit
} from '@mui/icons-material';

interface RecipeImportDialogProps {
  open: boolean;
  onClose: () => void;
}

const RecipeImportDialog: React.FC<RecipeImportDialogProps> = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [url, setUrl] = useState('');
  const [manualInput, setManualInput] = useState('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Import Recipe
        <IconButton 
          onClick={onClose} 
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      
      <DialogContent>
        <Tabs value={activeTab} onChange={handleTabChange} variant="fullWidth">
          <Tab label="Website URL" icon={<Link />} />
          <Tab label="Instagram" icon={<Instagram />} />
          <Tab label="Manual Input" icon={<Edit />} />
        </Tabs>

        <Box sx={{ mt: 3 }}>
          {activeTab === 0 && (
            <>
              <TextField
                fullWidth
                label="Recipe URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/recipe"
                sx={{ mb: 2 }}
              />
              <Button 
                variant="contained" 
                fullWidth
                disabled={!url}
              >
                Scrape Recipe
              </Button>
            </>
          )}

          {activeTab === 1 && (
            <>
              <TextField
                fullWidth
                label="Instagram Post URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://instagram.com/p/..."
                sx={{ mb: 2 }}
              />
              <Button 
                variant="contained" 
                fullWidth
                disabled={!url}
              >
                Extract Recipe
              </Button>
            </>
          )}

          {activeTab === 2 && (
            <>
              <TextField
                fullWidth
                multiline
                rows={6}
                label="Paste recipe text"
                value={manualInput}
                onChange={(e) => setManualInput(e.target.value)}
                placeholder="Recipe Name:\nIngredients:\nInstructions:..."
                sx={{ mb: 2 }}
              />
              <Button 
                variant="contained" 
                fullWidth
                disabled={!manualInput.trim()}
              >
                Parse Recipe
              </Button>
            </>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeImportDialog;