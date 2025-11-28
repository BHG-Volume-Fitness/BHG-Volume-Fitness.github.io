import { useQuery } from "@tanstack/react-query";
import { type ContactSubmission } from "@shared/schema";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Mail, Building2, User, Calendar } from "lucide-react";

export default function AdminPage() {
  const { data: submissions, isLoading } = useQuery<ContactSubmission[]>({
    queryKey: ["/api/contact"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Loading submissions...</h2>
          <p className="text-muted-foreground">Please wait</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-admin-title">
            Contact Form Submissions
          </h1>
          <p className="text-muted-foreground" data-testid="text-submission-count">
            {submissions?.length || 0} total submissions
          </p>
        </div>

        {!submissions || submissions.length === 0 ? (
          <Card>
            <CardContent className="py-12">
              <div className="text-center text-muted-foreground">
                <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No submissions yet</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <Card
                key={submission.id}
                className="hover-elevate"
                data-testid={`card-submission-${submission.id}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="flex items-center gap-2 mb-2">
                        <User className="w-5 h-5 flex-shrink-0" />
                        <span data-testid={`text-name-${submission.id}`}>{submission.name}</span>
                      </CardTitle>
                      <CardDescription className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 flex-shrink-0" />
                          <a
                            href={`mailto:${submission.email}`}
                            className="hover:underline"
                            data-testid={`link-email-${submission.id}`}
                          >
                            {submission.email}
                          </a>
                        </div>
                        {submission.company && (
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 flex-shrink-0" />
                            <span data-testid={`text-company-${submission.id}`}>{submission.company}</span>
                          </div>
                        )}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span data-testid={`text-date-${submission.id}`}>
                        {new Date(submission.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </Badge>
                  </div>
                </CardHeader>
                <Separator />
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Message:</p>
                    <ScrollArea className="max-h-40">
                      <p
                        className="text-sm leading-relaxed whitespace-pre-wrap"
                        data-testid={`text-message-${submission.id}`}
                      >
                        {submission.message}
                      </p>
                    </ScrollArea>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
