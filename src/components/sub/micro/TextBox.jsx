import { useAuth } from '../../../contexts/auth';
import DOMPurify from 'dompurify';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '../../../shadcn/components/ui/dialog';
import Editor from '../forms/Editor';

function TextBox({ id, title, content, onContentUpdate }) {
    const { user } = useAuth();

    const cleanHtml = DOMPurify.sanitize(content, {
        ALLOWED_ATTR: ['href', 'class'] // Add any attributes you want to allow
    });

    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1>{title}</h1>
                {user &&
                    <Dialog>
                        <DialogTrigger asChild>
                            <h1 className='text-xs'>Edit</h1>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit {`"${title}"`}</DialogTitle>
                            </DialogHeader>
                            <Editor content={content} id={id} onSave={(newContent) => onContentUpdate(id, newContent)}
                            />
                        </DialogContent>
                    </Dialog>
                }
            </div>
            <div className='text-[13px] p-2 min-h-[100px] rounded-sm border border-slate-400 bg-white  sanitized-content' dangerouslySetInnerHTML={{ __html: cleanHtml }}></div>
        </div>
    );
}

export default TextBox;