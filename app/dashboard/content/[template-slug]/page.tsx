"use client";
import React, { useState, useEffect, use } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { ArrowLeft, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModal';
import { AIoutput } from '@/utils/schema';
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
interface PROPS {
    params: Promise<{
        'template-slug': string; 
    }>;
}

function CreateNewContent(props: PROPS) {
    const [selectedTemplate, setSelectedTemplate] = useState<TEMPLATE | undefined>(undefined);
    const [loading,setLoading]=useState(false);

        const [aiOutput,setAiOutput]=useState<string>('');
        const {user}=useUser();

    const GenerateAIContent=async(formData:any)=>{
        setLoading(true);
        const SelectedPrompt =selectedTemplate?.aiPrompt;
        const FinalAIPrompt = JSON.stringify(formData)+', '+SelectedPrompt;

        const result =await chatSession.sendMessage(FinalAIPrompt);

        setAiOutput(result?.response.text());
        await SaveInDb(formData,selectedTemplate?.slug,result?.response.text())
        setLoading(false);

    }

    const SaveInDb=async(formData:any,slug:any,aiResp:string)=>{
        const result = await db.insert(AIoutput).values({
            formData: formData,
            templateSlug: slug,
            aiResponse: aiResp,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createdAt: moment().format('DD/MM/yyyy'),

        });
        console.log(result)
    }

    const [slug, setSlug] = useState<string | undefined>(undefined);

    useEffect(() => {
        const unwrapParams = async () => {
            const { 'template-slug': slugValue } = await props.params;
            setSlug(slugValue);
        };
        unwrapParams();
    }, [props.params]);

    useEffect(() => {
        if (slug) {
            const template = Templates.find((item) => item.slug === slug);
            setSelectedTemplate(template);
        }
    }, [slug]);

    return (
        <div className='p-4'>
            <Link href='/dashboard'>
            <Button> <ArrowLeft/> Back </Button>
            </Link>
            
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-2 '>
                {/* FormSection */}
                {selectedTemplate && (
                    <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => GenerateAIContent(v)} 
                    loading={loading}/>
                )}
                {/* OutputSection */}
                <div className='col-span-2 '>
                    <OutputSection aiOutput ={aiOutput} />
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;



